import styled from "@emotion/styled";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const MoreIcon = styled(MoreHorizIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: #99668f;
  }
`;

const UpvoteIcon = styled(ArrowCircleUpIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: orange;
  }
`;

const DownvoteIcon = styled(ArrowCircleDownIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: blue;
  }
`;

const CommentIcon = styled(ChatBubbleOutlineIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: #99668f;
  }
`;

const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: red;
  }
`;

const LikeIcon = styled(FavoriteIcon)<{ liked: boolean }>`
  color: ${({ liked }) => (liked ? "hotpink" : "gray")};
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: pink;
  }
`;

const StatsIcon = styled(BarChartOutlinedIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 0;

  &:hover {
    color: green;
  }
`;

export {
  LikeIcon,
  CommentIcon,
  DeleteIcon,
  MoreIcon,
  StatsIcon,
  DownvoteIcon,
  UpvoteIcon,
};
