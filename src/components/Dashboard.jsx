import React from "react";
import Card from "./Card";
import Container from "./Container";
import VideoCard from "./video/VideoCard";
import RecentSubscribers from "./RecentSubscribers";

const Dashboard = () => {
  return (
    <Container>
      <div className=" flex-1 text-white min-h-screen px-4 py-2  rounded-lg m-2  mb-8">
        {/* User Profile Section */}
        <div className=" ">
          <img
            src="https://marketplace.canva.com/EAE8OcQE8xs/1/0/1600w/canva-modern-gaming-cover-youtube-channel-art-RdH0ndaf7eo.jpg"
            alt="Channel Cover"
            className="min-w-screen h-48 w-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="relative flex items-center flex-col justify-center gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg"
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 object-cover border-white relative bottom-16 -mb-16"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold ">John Doe</h1>
            <h2 className="text-gray-400">@johndoe</h2>
            <p className="text-sm text-gray-300">
              Content Creator | Tech Enthusiast
            </p>
          </div>
        </div>

        <div className="mt-8 bg-secondary p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Channel Description</h2>
          <p className="text-gray-300 mt-4">
            Welcome to VisionTube! Here, I share tutorials, tech reviews, and
            tips to help you grow in your tech journey. Subscribe and join the
            community!
          </p>
        </div>

        {/* Analytics Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Total Views</h2>
            <p className="text-3xl font-bold mt-2">12,345</p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">Total Likes</h2>
            <p className="text-3xl font-bold mt-2">8,742</p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">Recent Subscribers</h2>
            <p className="text-3xl font-bold mt-2">1,245</p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">Total Videos</h2>
            <p className="text-3xl font-bold mt-2">56</p>
          </Card>
        </div>

        {/* Recently Uploaded Videos Section */}
        <div className="mt-8  border-t  border-gray-700">
          <h2 className="text-2xl font-bold mt-6">Recently Uploaded Videos</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <VideoCard title="Video Title" views="1,234" daysAgo="2" />
            <VideoCard title="Video Title" views="1,234" daysAgo="2" />
          </div>
        </div>

        {/* User Channel Description Section */}

        {/* Recent Subscribers Section */}
        <div className="mt-8 border-t border-gray-700 ">
          <h2 className="text-2xl font-bold mt-6">Recent Subscribers</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <RecentSubscribers name="Jane Smith" />
            <RecentSubscribers name="Rahul Kumar" />
            <RecentSubscribers name="John Doe" />
          </div>
        </div>
      </div>
    </Container>
  );
};

// const VideoCard = ({ title, views, daysAgo }) => (
//   <div className="bg-gray-800 rounded-lg shadow-md p-4">
//     <img
//       src="/path-to-thumbnail.jpg"
//       alt="Video Thumbnail"
//       className="rounded-lg mb-4"
//     />
//     <h3 className="text-lg font-bold">{title}</h3>
//     <p className="text-gray-300 text-sm mt-2">
//       {views} views | {daysAgo} days ago
//     </p>
//   </div>
// );

export default Dashboard;
