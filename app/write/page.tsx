"use client"
import { useSession } from "next-auth/react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/libs/firebase";

const WritePage = () => {

  useEffect(() => {
    document.title = 'Sling Academy';
    if(typeof document !== 'undefined') {
      console.log(document.location.href);
  }
}, []);

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [file, setFile] = useState<any>(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
 
   const router = useRouter()
   const { status} = useSession()

   useEffect(()=>{
      const NavgateHome =()=>{
           if(status === "unauthenticated" as string){
            router.push("/")
           }
      }
      NavgateHome()
   },[status,router])

  
   useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file?.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str:any) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");



  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };



  return (
    <div className="mt-12">
        <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Title" className="mb-10 p-12 text-4xl border-none outline-none bg-transparent"/>
        <select className="cursor-pointer mb-10 bg-transparent px-4 py-2 ml-10 w-max" onChange={(e) => setCatSlug(e.target.value)}>
        <option className="dark:bg-gray-400 cursor-pointer"  value="style">style</option>
        <option className="dark:bg-gray-400 cursor-pointer"  value="fashion">fashion</option>
        <option className="dark:bg-gray-400 cursor-pointer"  value="food">food</option>
        <option className="dark:bg-gray-400 cursor-pointer"  value="culture">culture</option>
        <option className="dark:bg-gray-400 cursor-pointer"  value="travel">travel</option>
        <option className="dark:bg-gray-400 cursor-pointer"  value="coding">coding</option>
      </select>
        <div className="flex flex-col h-[700px] gap-5 relative">
            <button type="button" className="border border-gray-600 rounded-full max-w-max p-2">
            <Image src="/plus.png" onClick={()=>setOpen(!open)} alt="pubish" className="" width={16} height={16}/>
            </button>
            {open && (<div className="flex absolute z-50 left-14 top-1 gap-10">
            <input
              type="file"
              id="image"
              className="hidden"
              placeholder=""
              onChange={(e:any) => setFile(e.target.files[0])}
              />
            <button className=" ">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={24} height={24} />
              </label>
            </button>
            <button className="">
              <Image src="/external.png" alt="" width={24} height={24} />
            </button>
            <button className="">
              <Image src="/video.png" alt="" width={24} height={24} />
            </button>
          </div>
        )}
        <ReactQuill  onChange={setValue} className="w-full dark:text-white  bg-transparent"  theme="bubble" value={value} placeholder="Tell Your Story..."/>
        </div>
        <button onClick={handleSubmit} type="button" className="absolute top-8 right-6 border-none p-4 hover:bg-green-600 rounded-xl bg-green-500 text-white cursor-pointer">Publish</button>
    </div>
  )
}

export default WritePage