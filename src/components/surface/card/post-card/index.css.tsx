import styled from "@emotion/styled";
import { SvgIcon } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StyledPostCard = styled.div`
  border-bottom: 1px solid #d3d3d3;
  border-top: none
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
  padding: 1rem;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  border: none;
`;

const BaseIcon = styled(SvgIcon)`
  cursor: pointer;
  margin: 0;
  display: flex;
  font-size: 1.2rem;
  color: gray;
`;

const CommentIcon = styled(ChatBubbleOutlineIcon)`
  cursor: pointer;
  margin: 0;
  display: flex;
  font-size: 1.2rem;
  color: gray;

  &:hover {
    color: blue;
  }
`;

const LikeIcon = styled(FavoriteBorderOutlinedIcon)`
  cursor: pointer;
  margin: 0;
  display: flex;
  font-size: 1.2rem;
  color: gray;

  &:hover {
    color: red;
  }
`;

const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  cursor: pointer;
  margin: 0;
  display: flex;
  font-size: 1.2rem;
  color: gray;

  &:hover {
    color: red;
  }
`;

const StatsIcon = styled(BarChartOutlinedIcon)`
  cursor: pointer;
  margin: 0;
  display: flex;
  font-size: 1.2rem;
  color: gray;

  &:hover {
    color: green;
  }
`;

export {
  StyledPostCard,
  PostFooter,
  CommentIcon,
  LikeIcon,
  StatsIcon,
  DeleteIcon,
};
