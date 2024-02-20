import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Listbox, ListboxItem, Chip, ScrollShadow } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { users } from "./data";
import { useMemo, useState } from "react";

const ModalListUser = ({ theme, isOpen, onOpenChange, name }) => {
    const userInfo = useSelector(state => state.auth.userInfo.user)
    const [values, setValues] = useState(new Set(["1"]));

    const arrayValues = Array.from(values);

    const topContent = useMemo(() => {
        if (!arrayValues.length) {
            return null;
        }

        return (
            <ScrollShadow
                hideScrollBar
                className="w-full flex py-0.5 px-2 gap-1"
                orientation="horizontal"
            >
                {arrayValues.map((value) => (
                    <Chip key={value}>{users.find((user) => `${user.id}` === `${value}`).name}</Chip>
                ))}
            </ScrollShadow>
        );
    }, [arrayValues.length]);
    return (
        <Modal
            className={`${theme} dark:bg-secondary-dark `}
            size="xl"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop={"blur"}
            scrollBehavior={'inside'}
            closeButton={

                <svg aria-hidden="true" fill="none" focusable="false" height="1.6em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1.6em"><path d="M18 6L6 18M6 6l12 12"></path></svg>

            }
        >
            <ModalContent className=" dark:bg-secondary-dark">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 dark:bg-secondary-dark text-center dark:text-white ">
                            {name}
                        </ModalHeader>
                        <hr />
                        <ModalBody className="flex flex-col dark:bg-secondary-dark">
                            <ListboxWrapper>
                                <Listbox
                                    topContent={topContent}
                                    classNames={{
                                        base: "max-w-xs",
                                        list: "max-h-[500px] overflow-scroll",
                                    }}
                                    defaultSelectedKeys={["1"]}
                                    items={users}
                                    label="Assigned to"
                                    selectionMode="multiple"
                                    onSelectionChange={setValues}
                                    variant="flat"
                                >
                                    {(item) => (
                                        <ListboxItem key={item.id} textValue={item.name}>
                                            <div className="flex gap-2 items-center">
                                                <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
                                                <div className="flex flex-col">
                                                    <span className="text-small">{item.name}</span>
                                                    <span className="text-tiny text-default-400">{item.email}</span>
                                                </div>
                                            </div>
                                        </ListboxItem>
                                    )}
                                </Listbox>
                            </ListboxWrapper>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
export default ModalListUser;
