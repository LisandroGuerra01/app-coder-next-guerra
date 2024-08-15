import { NextResponse } from "next/server";
import { mockData } from "@/data/products";
import { revalidateTag, revalidatePath } from "next/cache";

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve, timer));

export async function GET(request, { params }) {
    const { category } = params;
    const data = category === 'all' ? mockData : mockData.filter(item => item.category === category)

    await sleep(1000);

    // revalidateTag('products');
    revalidatePath('/products/[category]');
    return NextResponse.json({ data });
}