import React from "react";
import Header from "../Shared/header";

// elements
import Image from "../elements/Image";

// MUI
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";

const ProfileEdit = (props) => {
  const token = document.cookie;
  console.log(token);
  return (
    <React.Fragment>
      <Header />
      <header style={{ display: "flex" }}>
        <div>
          <ProfileImg />
        </div>
        <div>
          <grid>
            <h1>Username</h1>
            <div>
              <Button>프로필 사진 바꾸기</Button>
              {/* <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                    </Box>
                                </Modal> */}
            </div>
          </grid>
        </div>
      </header>
      <div>
        {/* <div>
          사용자 이름
          <TextField
            id="outlined-basic"
            label="사용자 이름"
            variant="outlined"
            helperText="In most cases, you'll be able to change your username back to
            undefined for another undefined days. 더 알아보기"
          />
        </div> */}
        {/* <div>
          웹사이트
          <TextField id="outlined-basic" label="웹사이트" variant="outlined" />
        </div>
      </div>
      <div>
        <div>
          소개
          <TextField
            id="outlined-basic"
            label="소개"
            variant="outlined"
            helperText="개인정보
            비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의
            개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다."
          />
        </div>
        <div>
          이메일
          <TextField id="outlined-basic" label="이메일" variant="outlined" />
        </div>
        <div>
          전화번호
          <TextField id="outlined-basic" label="전화번호" variant="outlined" />
        </div>
        <div>
          성별
          <FormControl fullWidth>
            <InputLabel id="gender-select-label">성별</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              // value={age}
              label="gender"
              // onChange={handleChange}
            >
              <MenuItem value="man">남</MenuItem>
              <MenuItem value="woman">여</MenuItem>
              <MenuItem value="unknown">밝히고 싶지 않음</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          비슷한 계정 추천/
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="팔로우할 만한 비슷한 계정을 추천할 때
          회원님의 계정을 포함합니다.[?]"
            />
          </FormGroup>
        </div> */}
      </div>
      <div>
        <Button variant="contained">제출</Button>
      </div>
    </React.Fragment>
  );
};

const ProfileImg = styled("div")({
  width: "150px",
  height: "150px",
  background: "#62676A",
  borderRadius: "75px",
});

export default ProfileEdit;