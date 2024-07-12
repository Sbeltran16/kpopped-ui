import styled from "@emotion/styled";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MoreIcon = styled(MoreHorizIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: #99668f;
  }
`;

const CommentIcon = styled(ChatBubbleOutlineIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: #99668f;
  }
`;

const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: red;
  }
`;

const LikeIcon = styled(FavoriteBorderOutlinedIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: red;
  }
`;

const StatsIcon = styled(BarChartOutlinedIcon)`
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: green;
  }
`;

export { LikeIcon, CommentIcon, DeleteIcon, MoreIcon, StatsIcon };
