// import { NextResponse } from "next/server";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/firebase/config";

// export async function GET(request, { params }) {
//     const { order } = params;
//     const productsRef = collection(db, "orders");
//     const q = query(productsRef, where("status", "==", order));
//     const querySnapshot = await getDocs(q);
//     const docs = querySnapshot.docs.map(doc => doc.data());
//     return NextResponse.json(docs);
// }