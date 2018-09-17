import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Api from "../../api/api";

const api = new Api();

import {
  MODAL_SHOW, MODAL_HIDE, CHANGE_TITLE, CHANGE_DESCRIPTION, SHOW_MODAL, HIDE_MODAL, SET_INITIAL_STATE
} from "../../actions/courses-page";

import coursesActions from "../../actions/courses-page";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Courses page actions', () => {
  it('should dispatch MODAL_SHOW when create course clicked', () => {

    const expectedActions = [
      {type: MODAL_SHOW}
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.createCourseModalShow());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch MODAL_HIDE when close modal', () => {

    const expectedActions = [
      {type: MODAL_HIDE}
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.createCourseModalHide());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch CHANGE_TITLE when typing title of course', () => {
    const title = 'Title of course';
    const expectedActions = [
      {type: CHANGE_TITLE, title}
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.changeTitle(title));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch CHANGE_DESCRIPTION when typing description of course', () => {
    const description = 'This is a description of new course';
    const expectedActions = [
      {type: CHANGE_DESCRIPTION, description}
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.changeDescription(description));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch SHOW_MODAL when click to enter course', () => {
    const course = {id: 1, description: 'Description', title: 'course title'};
    const expectedActions = [
      {type: SHOW_MODAL, course}
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.showCourseDetails(course));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch HIDE_MODAL for close handler', () => {
    const expectedActions = [
      {type: HIDE_MODAL }
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.close());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should return initial state', () => {
    const expectedActions = [
      {type: SET_INITIAL_STATE }
    ];

    const store = mockStore({});
    store.dispatch(coursesActions.setInitialState());
    expect(store.getActions()).toEqual(expectedActions);
  });

});