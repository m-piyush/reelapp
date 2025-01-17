import React, { useState } from 'react';
import {  Modal } from 'antd';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";


const Share: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CiShare2
        className="cursor-pointer text-2xl"
        onClick={showModal} 
      />


      <Modal
        title="Share"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} 
      >
        <div className="flex justify-evenly p-10">
          {/* Icons */}
          <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
          <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-3xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-3xl cursor-pointer" />
        </div>
      </Modal>
    </>
  );
};

export default Share;
