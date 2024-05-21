// this is a special export that tells the router this is a dynamic route
export const dynamic = "force-dynamic";

import { getMiners } from '../../miner-api/get-miners'

// this is the GET method for this route
export async function GET() {
  const res = await getMiners()
  return Response.json(res)
}
