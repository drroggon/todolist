window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list = document.querySelector('.todo-list');
    const container = document.querySelector('#todo-container');
    
    // Prevent form from submitting
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ask user to fill in the task
        const task = input.value;
        if (!task) {
            alert('Please add a task.');
            return;
        }
        else {
            // Creating task container 
            let box = document.createElement('div');
            box.className = 'todo-item';

            // Creating textfield for current task
            let textfield = document.createElement('textarea');
            textfield.setAttribute('rows', '1');
            textfield.className = 'text';
            textfield.setAttribute('type', 'text');
            textfield.value = task;
            textfield.readOnly = true;

            // Inserting textfield into box
            box.append(textfield);

            // Creating div with buttons
            let btns = document.createElement('div');
            btns.className = 'buttons';

            // Creating button-edit for current task
            let editB = document.createElement('button');
            editB.className = 'edit';
            editB.textContent = 'Edit';

            // Creating button-done for current task
            let doneB = document.createElement('button');
            doneB.className = 'done';
            doneB.textContent = 'Done';

            // Inserting buttons into div
            btns.append(editB, doneB);

            // INserting buttons-div into box with textfield
            box.append(btns);

            // Inserting box into container
            container.append(box);

            // Clearing input
            input.value='';

            // Creating "done" function
            doneB.addEventListener('click', (e) => {
                box.remove();
            });
            
            // Creating "edit" function
            editB.addEventListener('click', (e) => {
                if (editB.textContent == 'Edit') {
                    textfield.readOnly = false;
                    editB.textContent = "Save";
                } 
                else {
                    textfield.readOnly = true;
                    editB.textContent = "Edit";
                }
            });
        }
    });
});
