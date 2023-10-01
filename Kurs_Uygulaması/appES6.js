//Course Constructor
class Course{
    constructor(title, instructor, image){
        this.courseId = Math.floor(Math.random() * 10000)
        this.title = title
        this.instructor = instructor
        this.image = image
    }
}

//UI Constructor
class UI{
    addCourseToList(course){
        const list = document.getElementById('course-list');
    
        var html = `
            <tr>
                <td><img src="img/${course.image}" width=300px height=200px /></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;

        list.innerHTML += html; 
    }
    clearControls(){
        document.getElementById('title').value = ""
        document.getElementById('instructor').value = ""
        document.getElementById('image').value = ""
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
            return true;
        }
    }
    showAlert(message, className){
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
}

class Storage{
    static getCourses(){ /* localStorage üzerinden bilgileri alacak */
        let courses; 
        
        if(localStorage.getItem('courses') ===null){ /* localStorage ' a ait getItem(verileri almak için) ve setItem(verileri kaydetmek için) kullandım. */
            courses = []
        }else[
            courses = JSON.parse(localStorage.getItem('courses'))
            /* localStorage tarafında bilgiler direkt olarak JSON formatında saklanamaz. */
            /* JSON objesi tarzında string ifadeler olarak saklanır. */
            /* Yani JSON stringinden JSON objesine çevrildi. Tam tersi için yani kayıt ederken JSON.stringfy ifadesi kullanılır. */
        ]
        return courses;
    }

    static displayCourses(){ /* localStorage ' den alınan bilgileri ekranda gösterecek */
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }

    static addCourse(course){
        const courses = Storage.getCourses(); /* mevcut localStorage üzerindeki courses dizisini aldım. Boş veya dolu olmasının bir önemi yok */
        courses.push(course); /* ekran üzerinden girdiğim veriyi courses dizisine ekledim. */
        localStorage.setItem('courses',JSON.stringify(courses)) /* Bu sefer JSON stringine çevirdim. */
    }

    static deleteCourse(element){
        if(element.classList.contains('delete')){
            const id = element.getAttribute('data-id');

            const courses = Storage.getCourses();

            courses.forEach((course,index) =>{
                if(course.courseId == id){
                    courses.splice('index',1) /* üzerinde bulunduğum kursun indexinden itibaren 1 index kadar giderek sil */
                }
            })

            localStorage.setItem('courses',JSON.stringify(courses))
        }
    }
}

document.addEventListener('DOMContentLoaded',Storage.displayCourses) 

document.getElementById('new-course').addEventListener('submit',function(e){
    let title = document.getElementById('title').value
    let instructor = document.getElementById('instructor').value
    let image = document.getElementById('image').value

    //console.log(title,instructor,image)

    //create course object
    const course = new Course(title,instructor,image)

    //create uı object
    const ui = new UI()

    if(title === '' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning')
    }else{
        //add course to list
        ui.addCourseToList(course)

        //save to localStorage
        Storage.addCourse(course)

        //clear controls
        ui.clearControls()

        ui.showAlert('The course has been added','success')
    }

    e.preventDefault(); /* sayfanın submit olmasını yani refresh olmasını engeller, bu sayede ekranda girdiğim inputlar kaybolmaz */
})

document.getElementById('course-list').addEventListener('click',function(e){
     const ui = new UI()
     console.log(e.target)
     //delete course
     if(ui.deleteCourse(e.target) == true){

        //delete from localStorage
        Storage.deleteCourse(e.target)
    
        ui.showAlert('The course has been deleted','danger')
     }
})