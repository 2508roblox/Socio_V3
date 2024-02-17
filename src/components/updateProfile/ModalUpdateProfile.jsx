import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useSelector } from "react-redux";


const ModalUpdateProfile = ({ theme, isOpen, onOpenChange, updateProfile }) => {
    const userInfo = useSelector(state => state.auth.userInfo.user)

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
                            Edit Profile
                        </ModalHeader>
                        <hr />
                        <ModalBody className="flex flex-col dark:bg-secondary-dark">
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={updateProfile}>
                                <div className='grid grid-flow-col grid-cols-2 gap-3'>
                                    <div className="">
                                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first Name  </label>
                                        <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joe" required />
                                    </div>
                                    <div className="">
                                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last  Name  </label>
                                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="My" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>



                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-btn-yellow  dark:focus:ring-primary-800">Create an account</button>


                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                </p>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
export default ModalUpdateProfile;
