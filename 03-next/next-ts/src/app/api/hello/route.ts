// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  console.log(request);

  const data = { name: 'John Doe' }

  return Response.json({ data })
}
