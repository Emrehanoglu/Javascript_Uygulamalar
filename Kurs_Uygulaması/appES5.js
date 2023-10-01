//Course Constructor
function Course(title, instructor, image){
    this.courseId = Math.floor(Math.random() * 10000)
    this.title = title
    this.instructor = instructor
    this.image = image
}

//UI Constructor
function UI(){
    
}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');
    
    var html = `
        <tr>
            <td><img src="img/${course.image}" width=300px height=200px /></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" data-id="" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    list.innerHTML += html; 
}

UI.prototype.clearControls = function(){
    document.getElementById('title').value = ""
    document.getElementById('instructor').value = ""
    document.getElementById('image').value = ""
}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message,className){
     var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
     `;
     const row = document.querySelector('.row');
    //beforeBegin, afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

document.getElementById('new-course').addEventListener('submit',function(e){
    let title = document.getElementById('title').value
    let instructor = document.getElementById('instructor').value
    let image = document.getElementById('image').value

    //console.log(title,instructor,image)

    //create course object
    const course = new Course(title,instructor,image)

    console.log(course.courseId)

    //create uı object
    const ui = new UI()

    if(title === '' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning')
    }else{
        //add course to list
        ui.addCourseToList(course)

        //clear controls
        ui.clearControls()

        ui.showAlert('The course has been added','success')
    }

    e.preventDefault(); /* sayfanın submit olmasını yani refresh olmasını engeller, bu sayede ekranda girdiğim inputlar kaybolmaz */
})

document.getElementById('course-list').addEventListener('click',function(e){
     const ui = new UI()
     ui.deleteCourse(e.target)

     ui.showAlert('The course has been deleted','danger')
})