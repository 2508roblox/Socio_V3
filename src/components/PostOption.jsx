import { UilEllipsisH } from "@iconscout/react-unicons";
import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn, DropdownSection} from "@nextui-org/react";
import { useSelector } from "react-redux";

const PostOption = () => {
    const {theme} = useSelector((state) => state.theme)
  return (
<div className={theme == 'dark' ?  'dark' :'light'}>

    <Dropdown
    showArrow
       radius="sm"
    className={theme == 'dark' ?  'dark ' :'light'}>
      <DropdownTrigger>
        <Button 
        size="xs" 
          variant="light" 
          className="dark:bg-transparent border-none"
          
        >
      <UilEllipsisH className="dark:text-primary-light"></UilEllipsisH>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
           className="dark dark:text-white"
          key="new"
          shortcut="⌘N"
        //   startContent={<EditDocumentIcon className={iconClasses} />}
 
        >
          Edit Post
        </DropdownItem>
        <DropdownItem
           className="dark dark:text-white"
          key="copy"
          shortcut="⌘C"
   
        >
          Copy link
        </DropdownItem>
       

        <DropdownSection title="Danger zone">  
          <DropdownItem
          
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
            // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
        
      </DropdownMenu>
    </Dropdown>
</div>
  )
}

export default PostOption