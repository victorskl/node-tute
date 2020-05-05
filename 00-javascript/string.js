// string is sequence of characters
let strIsCharSeq = 'character sequence';
for (let i = 0; i < strIsCharSeq.length; i++) {
    console.log(strIsCharSeq.charAt(i));
}

console.log();

//---

// S3 API Head Object return restore status with header key "Restore" value in string
// https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html
// If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy.
// For example: x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00 GMT"
// If the object restoration is in progress, the header returns the value ongoing-request="true".

const head_object = {"Restore":"ongoing-request=\"false\", expiry-date=\"Fri, 09 Mar 2020 13:46:01 GMT\""};
const restoreStatus = head_object['Restore'];
console.log(typeof restoreStatus, typeof restoreStatus === 'string');
console.log();

const isOngoingRequest = restoreStatus.includes('true');
console.log(isOngoingRequest);

const expiryChunk = restoreStatus.slice(25);
console.log(expiryChunk);
if (!isOngoingRequest && expiryChunk) {
    const expiryDateStr = expiryChunk.split('=')[1];
    const expiryDate = Date.parse(expiryDateStr);
    const now = Date.now();
    const expired = expiryDate < now;
    console.log(expiryDate, now, expired);
    console.log(new Date(expiryDate)); // new Date() is locale aware in browser i.e. will be shown as localised timezone
}

console.log();

const head_object2 = {"Restore":"ongoing-request=\"true\""};
let emptyString = head_object2.Restore.slice(25)
console.log(emptyString, typeof emptyString, emptyString === true, emptyString === '', emptyString.length);
