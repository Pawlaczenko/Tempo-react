import React from 'react'
import { BlueButton } from './Button';
import {FiStar} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TopInUsButton = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/songs/search`);
  }

  return (
    <BlueButton onClick={handleClick}><FiStar /> Get top songs in US</BlueButton>
  )
}

export default TopInUsButton