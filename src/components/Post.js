import React from "react";

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

const Post = (props) => {
  return (
    <React.Fragment>
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
            <FavoriteBorderTwoToneIcon /> <ChatBubbleOutlineTwoToneIcon />{" "}
            <SendTwoToneIcon /> <BookmarkBorderTwoToneIcon />
          </div>
          <div>Username님외 n명이 좋아합니다.</div>
          <div>Username 내용</div>
          <div>댓글 n개 모두 보기</div>
          <div>n일전</div>
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

export default Post;
