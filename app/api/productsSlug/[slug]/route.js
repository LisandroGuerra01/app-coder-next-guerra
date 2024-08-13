import { mockData } from "@/data/products";
import { NextResponse } from "next/server";

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve, timer));

export async function GET(_, { params }) {
    const { slug } = params;
    const data = mockData.find(item => item.slug === slug);

    await sleep(1000);

    return NextResponse.json({ data });
}