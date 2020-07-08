const mongoose = require("mongoose");
const { courseSchema, validateCourse } = require("../models/course");
// add model
const Course = mongoose.model("course", courseSchema);

//getting all the course from database
async function getCourses() {
  return await Course.find();
}
//get one course with id
async function getCourse(_id) {
  const course = await Course.findById(_id);
  if (!course) return;
  return course;
}
//add one course
async function addCourse(_course) {
  const newCourse = new Course({
    name: _course.name,
    isPublish: _course.isPublish,
    tags: _course.tags,
    rating: _course.rating,
    producedBy: _course.producedBy,
    subjects: _course.subjects,
    courseDescription: _course.courseDescription,
  });
  return newCourse.save();
}

//export all the utilities
module.exports = {
  getCourses,
  getCourse,
  addCourse,
};
