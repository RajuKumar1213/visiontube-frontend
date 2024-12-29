import { useEffect } from "react";
import authService from "./services/auth.service.js";
import { useState } from "react";
import {
  Container,
  Header,
  Sidebar,
  SignUp,
  VideoCard,
  VideoPage,
  HomePageInLogout,
  FixedSidebar,
  Dashboard,
  UploadVideo,
  Playlist,
} from "./components/index.js";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   authService
  //     .getChannelProfile("abhik")
  //     .then((res) => setData(res))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(data);

  return (
    <div>
      <Header />
      <Container>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </Container>

      <Sidebar />
      <FixedSidebar />
      <Dashboard />
      <UploadVideo />
      <Container width="max-w-6xl">
        <VideoPage />

        <SignUp />
        <HomePageInLogout />
        <Playlist />
      </Container>
    </div>
  );
}

export default App;
