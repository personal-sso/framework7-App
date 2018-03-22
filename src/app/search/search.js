/**
 * login.js业务逻辑
 **/

'use strict';
import searchTpl from './search.tpl.html';
import Tool from '../utils/tool';
import './search.less'
import stoObj from '../components/stora-data'

export default {
  init(page) {
    let searchTPl = Tool.renderTpl(searchTpl);
    $('.search-page').append($(searchTPl));
    console.log(stoObj);
  }
}
