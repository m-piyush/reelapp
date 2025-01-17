"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

import Share from "@/components/Share"
const Reels = () => {
    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const [likes, setLikes] = useState<number[]>([]);
    const [currentVideo, setCurrentVideo] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoIndex = videoRefs.current.indexOf(
                        entry.target as HTMLVideoElement
                    );
                    if (entry.isIntersecting) {
                        setCurrentVideo(videoIndex);
                        videoRefs.current[videoIndex]?.play();
                    } else {
                        videoRefs.current[videoIndex]?.pause();
                    }
                });
            },
            {
                root: null,
                threshold: 0.7,
            }
        );

        videoRefs.current.forEach((video) => {
            observer.observe(video);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Disable background scroll when modal is open
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            // Reset overflow style on cleanup
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const videos = [
        "/1.mp4",
        "/2.mp4",
        "/3.mp4",
        "/4.mp4",
        "/5.mp4",
        "/6.mp4",
        "/7.mp4",
        "/8.mp4",
    ];

    const setVideoRef = (el: HTMLVideoElement | null) => {
        if (el && !videoRefs.current.includes(el)) {
            videoRefs.current.push(el);
        }
    };


    const handleLike = (index: number) => {
        setLikes((prev) => {
            const newLikes = [...prev];
            newLikes[index] = newLikes[index] ? 0 : 1; // Toggle like/unlike
            return newLikes;
        });
    };

    const openModal = (index: number) => {
        setCurrentVideo(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="grid md:p-4 pt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {videos.map((video, idx) => (
                    <div key={idx} className="relative w-full">
                        <div className="relative">
                            <video
                                // controlslist="nodownload"
                                ref={setVideoRef}
                                className="w-full rounded-lg cursor-pointer"
                                src={video}
                                muted
                                controls
                                onClick={() => openModal(idx)}
                            />
                        </div>

                        <div className="flex gap-2 p-2">
                            <div className="flex gap-2 items-center">
                                {likes[idx] ? (
                                    <FaHeart
                                        className={`w-6 h-6 cursor-pointer text-red-500`}
                                        onClick={() => handleLike(idx)}
                                    />
                                ) : (
                                    <CiHeart
                                        className={`w-6 h-6 cursor-pointer`}
                                        onClick={() => handleLike(idx)}
                                    />
                                )}
                                {likes[idx] || 0}
                                <Share />

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && currentVideo !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="container relative w-full h-full max-w-md bg-black rounded-lg px-4 pt-4 pb-14 flex flex-col items-center justify-between"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => {
                            if (e.deltaY > 0) {
                                if (currentVideo < videos.length - 1) {
                                    setCurrentVideo((prev) => prev! + 1);
                                }
                            } else if (e.deltaY < 0) {
                                if (currentVideo > 0) {
                                    setCurrentVideo((prev) => prev! - 1);
                                }
                            }
                        }}
                    >
                        <button
                            className="absolute top-2 right-2 bg-white p-[2px] rounded-full"
                            
                        >
                            <IoIosCloseCircleOutline color="black" onClick={closeModal}/>
                        </button>

                        <video
                            className="w-full h-full object-cover rounded-lg"
                            src={videos[currentVideo]}
                            controls
                            autoPlay
                            controlsList="nofullscreen"
                            onEnded={() => {
                                if (currentVideo < videos.length - 1) {
                                    setCurrentVideo((prev) => prev! + 1);
                                } else {
                                    closeModal();
                                }
                            }}
                        />

                        <div className="w-full mt-4 mb-2 flex justify-center items-center bg-gray-800 p-2 rounded-lg">
                            <div className="flex gap-4 items-center">
                           
                                {likes[currentVideo] ? (
                                    <FaHeart
                                        className="w-6 h-6 cursor-pointer text-red-500"
                                        onClick={() => handleLike(currentVideo)}
                                    />
                                ) : (
                                    <CiHeart
                                        className="w-6 h-6 cursor-pointer text-white"
                                        onClick={() => handleLike(currentVideo)}
                                    />
                                )}
                                <span className="text-white text-lg">{likes[currentVideo] || 0}</span>

                                <Share />
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}




        </div>
    );
};

export default Reels;
