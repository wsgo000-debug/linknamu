import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

const LINK_IDS = ["github", "instagram", "email"] as const;
type LinkId = (typeof LINK_IDS)[number];

function isLinkId(value: unknown): value is LinkId {
  return typeof value === "string" && (LINK_IDS as readonly string[]).includes(value);
}

export async function GET() {
  const client = await clientPromise;
  const collection = client.db("linknamu").collection<ClickDoc>("clicks");
  const docs = await collection.find({}).toArray();

  const counts: Record<LinkId, number> = { github: 0, instagram: 0, email: 0 };
  for (const doc of docs) {
    if (isLinkId(doc._id)) {
      counts[doc._id] = doc.count ?? 0;
    }
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (!isLinkId(linkId)) {
    return NextResponse.json({ error: "Invalid linkId" }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db("linknamu").collection<ClickDoc>("clicks");
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
