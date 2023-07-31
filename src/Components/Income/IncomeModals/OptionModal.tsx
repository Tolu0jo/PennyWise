import React, {useRef, useState, useEffect} from 'react'


const OptionModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: any) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) 
          setIsOpen(false);
    }
    useEffect(() => {
      window.addEventListener("mousedown", handleOutsideClick);
    }, []);
  return (
    <div>OptionModal</div>
  )
}

export default OptionModal