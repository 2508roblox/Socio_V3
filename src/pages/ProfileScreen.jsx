
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Tabs, Tab, Button, Switch, Image, ModalFooter, ModalBody, ModalHeader, ModalContent, useDisclosure, Modal } from "@nextui-org/react";
import { UilCameraPlus } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilImageUpload } from '@iconscout/react-unicons'
import 'react-image-crop/dist/ReactCrop.css';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSidebar from "../components/ProfileSidebar";
import { useRef, useState } from "react";
import ModalCrop from "../components/cropImage/ModalCrop";
import ModalBanner from "../components/banner/ModalBanner";
import { useUpdateAvatarMutation, useUpdateBannerMutation, useUpdateProfileMutation } from "../services/slices/userApiSlice";
import { updateAvatarRedux, updateBannerRedux, updateProfileRedux } from "../services/slices/authSlice";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ModalUpdateProfile from "../components/updateProfile/ModalUpdateProfile";
const ProfileScreen = () => {
  const userInfo = useSelector(state => state.auth.userInfo.user)
  const userInfo_ = useSelector(state => state.auth.userInfo)

  const authInfo = useSelector(state => state.auth)
  console.log('auth', authInfo)
  const dispatch = useDispatch()
  const [updateAvatar_, { isLoading: updateAvatarLoading, error: updateAvatarError }] = useUpdateAvatarMutation();
  const [updateBanner_, { isLoading: updateBannerLoading, error: updateBannerError }] = useUpdateBannerMutation();
  const [updateProfile_, { isLoading: updateProfileLoading, error: updateProfilerError }] = useUpdateProfileMutation();
  const { theme } = useSelector((state) => state.theme)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: bannerisOpen, onOpen: banneronOpen, onOpenChange: banneronOpenChange } = useDisclosure();
  const { isOpen: profileisOpen, onOpen: profileonOpen, onOpenChange: profileonOpenChange } = useDisclosure();




  const avatarUrl = useRef(
    userInfo.avatar
  );
  const updateAvatar = async (imgSrc) => {
    avatarUrl.current = imgSrc;
    dispatch(updateAvatarRedux(imgSrc));
    const avatar = await handleFile(imgSrc)
    let postData = {
      userId: userInfo._id,
      updatedData: {
        avatar: avatar
      }
    };
    await updateAvatar_(postData)
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  }
  const updateBanner = async (imgSrc) => {

    dispatch(updateBannerRedux(imgSrc));
    const avatar = await handleFile(imgSrc)
    let postData = {
      userId: userInfo._id,
      updatedData: {
        banner: avatar
      }
    };
    await updateBanner_(postData)
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  }


  const handleFile = async (avatar) => {
    const data = new FormData();
    data.append("file", avatar);
    data.append(
      "upload_preset",
      'nte7vuwr'
    );
    data.append("cloud_name", 'derz9qdf3');
    data.append("folder", "Cloudinary-React");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/derz9qdf3/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      return res.url
    } catch (error) {
    }
  };
  const formik = useFormik({
    initialValues: {
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      username: userInfo.username,

    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values)
      console.log(values)
      let updateProfile_Promise = updateProfile_({
        userId: userInfo._id,
        updatedData: values
      })
      toast.promise(updateProfile_Promise, {
        loading: 'Updating...',
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update.</b>
      });
      dispatch(updateProfileRedux(values));
      profileonOpenChange()


    }
  })
  return (
    <>

      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <main className="grid grid-cols-5 mt-3">
        <ProfileSidebar></ProfileSidebar>
        {/* profile  */}
        <div className="col-span-4 mx-3   h-[88vh] grid  grid-rows-5 grid-cols-1 ">
          <div className="row-span-3 bg-secondary-light  shadow-xl dark:bg-secondary-dark rounded-xl w-full mb-3">
            <div className="h-3/5 w-full relative z-1">

              <PhotoProvider maskOpacity={0.5}>
                <PhotoView src={userInfo.banner}>
                  <img
                    className="rounded-xl h-full w-full object-cover cursor-pointer"
                    src={userInfo.banner}
                    alt=""
                  />

                </PhotoView>
              </PhotoProvider>
              <div className="absolute flex gap-3 top-2 right-3">
                <UilEdit onClick={banneronOpen} className="cursor-pointer bg-primary-light dark:bg-primary-dark  rounded-sm " />
                <UilImageUpload onClick={banneronOpen} className="cursor-pointer bg-primary-light dark:bg-primary-dark  rounded-sm " />
              </div>
            </div>
            <div className="z-2  flex items-end -mt-32 flex-row gap-2 justify-between mx-32">
              <div className="flex relative gap-4 items-end">
                <div className="relative">

                  <PhotoProvider maskOpacity={0.5}>
                    <PhotoView src={avatarUrl.current || userInfo.avatar}>
                      <img
                        src={avatarUrl.current || userInfo.avatar}
                        alt=""
                        className=" object-cover h-[230px] w-[160px] rounded-2xl border-[6px]  cursor-pointer border-white"
                      />

                    </PhotoView>
                  </PhotoProvider>
                  <UilCameraPlus onClick={onOpen} className="rounded-sm bg-primary-light dark:bg-primary-dark absolute bottom-3 right-3"></UilCameraPlus>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold flex gap-2 items-center">
                    {userInfo.firstName} {userInfo.lastName}
                    <div className="status w-3 h-3 rounded-full bg-green-400 mt-2"></div>
                  </h1>
                  <p className="text-xl opacity-70">@{userInfo.username}</p>
                  <p className="text-lg font-semibold">MERN stack developer</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Add Friend
                </Button>
                <Button
                  className="w-full   bg-btn-gray dark:bg-btn-gray dark:text-white rounded-md text-xl  text-white px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
              </div>
            </div>
            <div className="mx-32 my-3 flex gap-4">
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                8000 Followers
              </p>
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                10 Followings
              </p>
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                100 Friends
              </p>
            </div>
          </div>
          {/* infomation */}
          <div className="row-span-2   grid grid-cols-2 gap-3">
            <div className="grid-cols-1 flex justify-between flex-col bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl p-6">
              <div className="">
                <h1 className="text-2xl font-semibold">Infomation</h1>
                <div className="mt-3  flex flex-col gap-1 overflow-y-scroll h-[17vh]  scrollbar-hide">
                  <div className="opacity-60 font-light bg-primary-light dark:bg-primary-dark px-3 py-1 rounded-md">
                    <h1 className="text-sm">Work at</h1>
                    <p className="font-bold">Viet Nam</p>
                  </div>
                  <div className="opacity-60 font-light bg-primary-light dark:bg-primary-dark px-3 py-1 rounded-md">
                    <h1 className="text-sm">Work at</h1>
                    <p className="font-bold">Viet Nam</p>
                  </div>
                  <div className="opacity-60 font-light bg-primary-light dark:bg-primary-dark px-3 py-1 rounded-md">
                    <h1 className="text-sm">Work at</h1>
                    <p className="font-bold">Viet Nam</p>
                  </div>
                  <div className="opacity-60 font-light bg-primary-light dark:bg-primary-dark px-3 py-1 rounded-md">
                    <h1 className="text-sm">Work at</h1>
                    <p className="font-bold">Viet Nam</p>
                  </div>

                </div>
              </div>
              <div className="flex flex-row gap-2 mt-4">
                <Button
                  className="   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                  onClick={profileonOpen}
                >
                  Update
                </Button>
                <Button
                  className="   bg-btn-gray dark:bg-btn-gray dark:text-white rounded-md text-xl  text-white   !py-1 "
                  size="lg"
                >
                  ...
                </Button>
              </div>
            </div>
            <div className="grid-cols-1 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl p-6">
              <h1 className="text-2xl font-semibold">Achievements</h1>
              <div className="flex gap-2 items-center ">
                <img className="w-[160px]" src="https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png" alt="" />
                <img className="w-[160px]" src="https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Galaxy-Brain/PNG/GalaxyBrain.png" alt="" />
                <img className="w-[160px]" src="https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ModalCrop theme={theme} isOpen={isOpen} onOpenChange={onOpenChange} updateAvatar={updateAvatar} />
      <ModalBanner theme={theme} isOpen={bannerisOpen} onOpenChange={banneronOpenChange} updateAvatar={updateBanner} />
      <ModalUpdateProfile theme={theme} isOpen={profileisOpen} onOpenChange={profileonOpenChange} formik={formik} />
    </>


  );
}

export default ProfileScreen