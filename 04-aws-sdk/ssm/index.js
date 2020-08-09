import AWS from 'aws-sdk';

AWS.config.update({region: 'ap-southeast-2'});

const test_param_name = '/test/id';
const test_param_value = 'testing safe to delete';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html
const ssm = new AWS.SSM();

const saveSecret = async (name, value, secured=true, overwrite=true) => {
    const secretName = `${name}`;
    console.log(`Saving secret to ${secretName}`);

    const config = {
        Name: secretName,
        Value: value,
        Type: secured ? 'SecureString':'String',
        Overwrite: overwrite
    };

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#putParameter-property
    try {
        const result = await ssm.putParameter(config).promise();
        return result.Version;
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

const getSecret = async (name, decrypted=true) => {
    console.log(`Getting secret for ${name}`);
    const params = {
        Name: name,
        WithDecryption: decrypted
    };

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#getParameter-property
    // Here we are using the promise form of the SSM getParameter methods.
    // Promises are a method for managing asynchronous code that serve as an alternative to the standard callback function syntax.
    try {
        const result = await ssm.getParameter(params).promise();
        return result.Parameter.Value;
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

const deleteSecret = (name, callback) => {
    console.log(`Deleting secret for ${name}`);
    const params = {
        Name: name
    };

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#deleteParameter-property
    ssm.deleteParameter(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
        }
        callback();
    });
};

const halt = () => {
    process.exit(0);
}


// --- using

// console.log(process.argv);
// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// });
const args = process.argv.slice(2);
console.log(args)

if (args.length > 0) {
    const cmd = args[0];

    if (cmd === 'save') {
        let secured = true;
        if (args.length === 2 && args[1] === 'secured=false') {
            secured = false;
        }
        saveSecret(test_param_name, test_param_value, secured).then((version) => {
            console.log(`Successfully saved parameter with version: ${version}`);
            process.exit(0);
        });
    }

    if (cmd === 'delete') {
        deleteSecret(test_param_name, halt);
    }

    if (cmd === 'get') {
        getSecret(test_param_name).then((value) => {
            console.log(value);
        });
    }

} else {
    console.log('Required command: save, delete, get');
}

// just a marker to track async executions (Promise, Callback) and process.exit() for learning purpose
console.log('>>> EOF');
