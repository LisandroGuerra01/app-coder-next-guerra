import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groide Gaming - Ecommerce de computacion",
  description: "Aplicación hecha en next por estudiante de CoderHouse",
  openGraph: {
    title: "",
    description: "Ecommerce hecho con nextJS",
    type: "website",
  },
};

// export async function generateMetadata({params}) {
//   const id = params.id;
//   const info = await fetch(`http://.../${id}`).then((res) => res.json());
//   return {
//     title: info.title,
//     description: info.description,
//     openGraph: {
//       title: info.title,
//       description: info.description,
//       images: [
//         {
//           url: info.image,
//         },
//       ],
//     },
//   };
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
