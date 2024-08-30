import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import useUserUpdate from "../../../api/users/hooks/use-user-update";
import { useState } from "react";
import {
  StyledBioTextArea,
  StyledLabelContainer,
  StyledUpdateForm,
  StyledBioTextAreaWrapper,
  StyledBioLabel,
} from "./index.css";

interface ProfileFormInputs {
  bio: string;
  profilePicture: FileList;
  profileBanner: FileList;
}

interface ProfileUpdateFormProps {
  onClose: () => void;
}

export default function ProfileUpdateForm({ onClose }: ProfileUpdateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>();
  const { updateUser } = useUserUpdate();
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: ProfileFormInputs) => {
    const formData = new FormData();

    if (data.bio) {
      formData.append("user[bio]", data.bio);
    }
    if (data.profilePicture.length > 0) {
      formData.append("user[profile_picture]", data.profilePicture[0]);
    }
    if (data.profileBanner.length > 0) {
      formData.append("user[profile_banner]", data.profileBanner[0]);
    }

    try {
      await updateUser(formData);
      setSuccessMessage("Profile updated successfully");
      setSubmissionError(null);
      onClose();

      window.location.reload();
    } catch (err) {
      setSuccessMessage(null);
      window.location.reload();
    }
  };

  return (
    <StyledUpdateForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabelContainer>
        <label>
          Profile Picture
          <input type="file" {...register("profilePicture")} />
        </label>
        <label>
          Profile Banner
          <input type="file" {...register("profileBanner")} />
        </label>
        <StyledBioTextAreaWrapper>
          <StyledBioTextArea
            {...register("bio", { maxLength: 300 })}
            placeholder=" "
          />
          <StyledBioLabel>Bio</StyledBioLabel>
        </StyledBioTextAreaWrapper>
        {errors.bio && <p>Bio must be under 300 characters</p>}
      </StyledLabelContainer>

      <Button type="submit">Save Changes</Button>
      {successMessage && <p>{successMessage}</p>}
      {submissionError && <p>{submissionError}</p>}
    </StyledUpdateForm>
  );
}
