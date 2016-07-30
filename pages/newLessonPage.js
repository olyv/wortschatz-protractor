var NewLessonPage = function() {

  this.carouselIndicatorDots = element.all(by.css("li.ng-scope"));
  this.answerButons = element.all(by.css(".btn.btn-primary.main-btn"));
  this.answerField = element.all(by.css(".answer-input"));
  this.incorrectAnswerElement = element.all(by.css(".alert.alert-danger"));

  this.countLessonItems = function() {
    return this.carouselIndicatorDots.count();
  };

  this.enterAndsubmitAnswer = function(lessonItemNumber, answer) {
    var index = lessonItemNumber
    this.answerField.get(index).sendKeys(answer)
    this.answerButons.get(index).click();
  };

  this.getIncorrectAnswerValue = function(lessonItemNumber) {
    return this.incorrectAnswerElement.get(lessonItemNumber).getText();
  };
};

module.exports = new NewLessonPage();
