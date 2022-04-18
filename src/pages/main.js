import React from "react";
import Header from "../Shared/header";
// import Post from "../components/Post";

//elements
import Image from "../elements/Image";

//MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import IconButton from "@mui/material/IconButton";

const Main = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Boxx>
        <Card sx={{ border: "1px solid #e2e2e1", borderRadius: "0px" }}>
          <div>
            <PostHeader>
              <CommentImg />
              <Commentname>username</Commentname>
              <IconButton sx={{ marginLeft: "auto", marginRight: "13px" }}>
                <MoreHorizIcon />
              </IconButton>
            </PostHeader>
          </div>
          <div>
            <Image
              shape="rectangle"
              src="https://c402277.ssl.cf1.rackcdn.com/photos/20852/images/magazine_medium/axolotl_WWsummer2021.jpg?1618758847"
            />
          </div>
          <div>
            <MiddleButtons>
              <IconButton>
                <FavoriteBorderTwoToneIcon />
              </IconButton>
              <IconButton>
                <ChatBubbleOutlineTwoToneIcon />
              </IconButton>
              <IconButton>
                <SendTwoToneIcon />
              </IconButton>
              <IconButton sx={{ marginLeft: "auto", marginRight: "13px" }}>
                <BookmarkBorderTwoToneIcon />
              </IconButton>
            </MiddleButtons>
          </div>
          <div>
            <LikeUsers>
              <strong>username</strong>님 <strong>외 1명</strong>이 좋아합니다.
            </LikeUsers>
          </div>
          <div>
            <LikeUsers>
              <strong>username</strong> 내용
            </LikeUsers>
          </div>
          <div>
            <MoreComment>댓글 n개 모두 보기</MoreComment>
          </div>
          <div>
            <PostDate>1일 전</PostDate>
          </div>
        </Card>
      </Boxx>
    </React.Fragment>
  );
};

const Boxx = styled(Box)({
  width: "350px",
  margin: "auto",
  marginTop: "7%",
});

const CommentImg = styled("div")({
  width: "32px",
  height: "32px",
  background: "grey",
  borderRadius: "16px",
  marginLeft: "13px",
});

const PostHeader = styled("div")({
  width: "100%",
  height: "60px",
  borderBottom: "1px solid #e2e2e1",
  display: "flex",
  alignItems: "center",
});

const Commentname = styled("p")({
  fontSize: "14px",
  fontWeight: "500",
  marginLeft: "13px",
});

const PostDate = styled("p")({
  fontSize: "12px",
  color: "#B7BBBD",
  padding: "0px",
  margin: "0px",
  marginTop: "10px",
});

const MoreComment = styled("p")({
  fontSize: "14px",
  color: "#B7BBBD",
  padding: "0px",
  margin: "0px",
  marginTop: "10px",
});

const LikeUsers = styled("p")({
  fontSize: "14px",
});

const MiddleButtons = styled("div")({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
});

export default Main;
