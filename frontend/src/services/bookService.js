import apiService from "../api/apiService";
import api from '../constants/api'
import * as utils from '../util/utils'
import * as userService from './userService'

/**
 * 도서 전체 조회
 * @returns {Array} book
 */
export async function getBookList() {
    return await apiService.toGet(api.GET_BOOK_LIST);
}

/**
 * 도서 9개 랜덤 조회
 * @returns {Object} book
 */
export async function getBookRandom() {
    return await apiService.toGet(api.GET_BOOK_RANDOM);
}

/**
 * 도서 조회
 * @param {Number} itemCode
 * @returns {Object} book
 */
export async function getBook(itemCode) {
    return await apiService.toGet(api.GET_BOOK, itemCode);
}

/**
 * 도서 추가
 * @param {Object} book
 */
export async function registerBook(book) {
    const params = utils.cameltoSnake(book);
    params['item_date'] = utils.nowDate();
    return await apiService.toPost(api.ADD_BOOK, params);
}

/**
 * 사용자 희망 도서 선택
 * @param {Array} book
 */
export async function removeBook(itemCode) {
    const params = {
        item_code: itemCode,
        member_id: userService.getUser().member_id
    };
    return await apiService.toDelete(api.RECOMMAND, params);
}