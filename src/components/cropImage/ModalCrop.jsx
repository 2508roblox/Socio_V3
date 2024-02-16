import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import ImageCropper from "./ImageCropper";

const ModalCrop = ({ theme, isOpen, onOpenChange, updateAvatar }) => {
    return (
        <Modal
            className={`${theme} dark:bg-secondary-dark `}
            size="xl"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop={"blur"}
            closeButton={

                <svg aria-hidden="true" fill="none" focusable="false" height="1.6em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1.6em"><path d="M18 6L6 18M6 6l12 12"></path></svg>

            }
        >
            <ModalContent className=" dark:bg-secondary-dark">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 dark:bg-secondary-dark text-center dark:text-white ">
                            Change Avatar
                        </ModalHeader>
                        <hr />
                        <ModalBody className="flex flex-col dark:bg-secondary-dark">
                            <ImageCropper
                                updateAvatar={updateAvatar}
                                closeModal={onOpenChange}
                            />

                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
export default ModalCrop;
