const mongoose = require("mongoose");
const { subjectSchema } = require("../models/subject");

const Subject = mongoose.model("subject", subjectSchema);

//get subjects
async function getSubjects() {
  return await Subject.find();
}
//get one subject by its id
async function getSubject(_id) {
  const _subject = await Subject.findById(_id);
  if (!_subject) return;
  return _subject;
}
//add subject
async function addSubject(_subject) {
  const newSubject = new Subject({
    name: _subject.name,
    courseId: _subject.courseId,
    topics: _subject.topics,
    subjectTags: _subject.subjectTags,
    subjectKeywords: _subject.subjectKeywords,
  });
  return await newSubject.save();
}

module.exports = {
  getSubject,
  getSubjects,
  addSubject,
};
