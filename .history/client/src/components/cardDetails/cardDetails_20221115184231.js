import React from "react";
import { useDispatch,useSelector} from 'react-redux';
import styles from './CardDetail.module.css'
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../../redux/actions";