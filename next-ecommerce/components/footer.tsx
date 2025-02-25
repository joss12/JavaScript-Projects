import { APP_NAME } from "@/lib/constants"

const Footer = () =>{
    const CurrentYear = new Date().getFullYear()
    return(
        <footer className="border-t">
            <div className="p-5 flex-center">
                {CurrentYear} {APP_NAME}. All right Reserved
            </div>
        </footer>
    )
}

export default Footer
