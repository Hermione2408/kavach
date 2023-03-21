import ReactDOM from "react-dom";
import { useEffect } from "react";
function Modal({onClose,children,actionBar}){
    //to stop the scrolling of the page 
    useEffect(()=>{document.body.classList.add('overflow-hidden')
  
    return ()=>{
        document.body.classList.remove('overflow-hidden')
    }
},[])
    //absolute is at top left corner of parent inset-height and width of parent 
    //fixed so that we can display the modal anywhere
return ReactDOM.createPortal(<div>
    <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
    <div className="fixed inset-40 p-10 bg-white">
       <div className="flex flex-col justify-between h-full">
       {children}
       <div className="flex justify-end">
       {actionBar}

       </div>
        </div> 
        
    </div>
    <div></div>

</div>,
document.querySelector('.modal-container'))
}

export default Modal;
