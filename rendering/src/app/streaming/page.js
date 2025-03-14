import { StreamOne, StreamTwo } from "@/components/streaming";
import { Suspense } from "react";

export default function StreamingComp(){
    return(
        <>
        <h1>Streaming</h1>
         <Suspense fallback={<p>...loading</p>}>
            <StreamOne />
         </Suspense>
         <hr/>
         <Suspense>
            <StreamTwo />
         </Suspense>
        </>
    )
}