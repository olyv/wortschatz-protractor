"use strict";

describe('Wortschatz demo test project', function() {

  var wortschatzHomepage = require('../pages/startPage.js');
  var newLessonPage = require('../pages/newLessonPage.js');

  it('should have a title', function() {
    wortschatzHomepage.get();
    expect(browser.getTitle()).toEqual('Wortschatz');
  });

  it('should have a Start Lesson button', function() {
    wortschatzHomepage.get();
    expect(wortschatzHomepage.startLessonButtonExists()).toBe(true);
  });

  it('should have 10 lesson items', function() {
    wortschatzHomepage.get();
    wortschatzHomepage.startLesson();
    browser.waitForAngular();
    expect(newLessonPage.countLessonItems()).toEqual(9);
  });

  it('should display message for incorrect answer ', function() {
    var incorrectAnswer = "foo bar";

    wortschatzHomepage.get();
    wortschatzHomepage.startLesson();
    browser.waitForAngular();
    newLessonPage.enterAndsubmitAnswer(0, incorrectAnswer)
    expect(newLessonPage.getIncorrectAnswerValue(0)).
            toMatch("Wrong. Your answer is '.*" + incorrectAnswer + "', correct answer is");
  });
});
