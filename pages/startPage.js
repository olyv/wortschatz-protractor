var WortschatzHomepage = function() {

  this.startLessonButton = element(by.css("a[href='#/lesson']"));

  this.get = function() {
    browser.get('http://wortschatz-olyv.rhcloud.com/');
  };

  this.startLesson = function() {
    this.startLessonButton.click();
  };

  this.startLessonButtonExists = function() {
    return this.startLessonButton.isPresent();
  };
};

module.exports = new WortschatzHomepage();
