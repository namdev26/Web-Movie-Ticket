import axios from 'axios'

import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType';

export const layDanhSachPhimAction = () => {

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachPhim();
      const action ={
        
      }
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}