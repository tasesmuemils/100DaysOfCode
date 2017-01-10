#! python2
#find_file.py  - program will find every file with file extension
#which user will input and then will copy all files to new folder

from Tkinter import *
import tkMessageBox, os, shutil

# function runs two functions under one button
def combine_functions(*funcs):
    def combine_func(*args, **kwargs):
        for f in funcs:
            f(*args, **kwargs)
    return combine_func

# launch the selective_copy function
def launch_start():
    #Input folder path to check
    check_folder_path = cfp_string.get()
    selective_copy(check_folder_path)

# run threw path tree, find files and copy them to new location
def selective_copy(folder):
    for folderName, subfolders, filenames in os.walk(folder):
        new_folder_path = nfp_string.get()
        os.mkdir(new_folder_path)
        file_extension = fe_string.get()
        for filename in filenames:
            full_file_name = os.path.join(folder, filename)
            if filename.endswith(file_extension):
                shutil.copy(full_file_name, new_folder_path)
        break
# message box after clicking the button
def complete_message():
    if len(fe_string.get()) == 0 or len(cfp_string.get()) == 0 or len(nfp_string.get()) == 0:
        tkMessageBox.showerror("Error", "Some fields are empty. Check again!")
    else:
        tkMessageBox.showinfo("Completed", "Job is completed!")

# Credit window
def Credits():
    tkMessageBox.showinfo("About program", "This program was created by Emils Bisenieks. \n\nMain function: Program runs threw file path, \nfinds files with necessey path \nand copy them to new folder.")

#main window
window = Tk()
window.title("_Find your files_")
window.geometry("650x230")
window.configure(bg="SteelBlue3")
frame = Frame(window)
frame.configure(bg="SteelBlue1")
frame.pack()

# menu bar
MenuBar = Menu(window)
FileMenuBar = Menu(MenuBar)
CreditsMenuBar = Menu(MenuBar)
MenuBar.add_cascade(label="File", menu=FileMenuBar)
MenuBar.add_cascade(label="Credits", menu=CreditsMenuBar)
FileMenuBar.add_command(label="Quit", command=window.destroy)
CreditsMenuBar.add_command(label="About", command=Credits)
window.config(menu=MenuBar)


# first text and entry box
fe_string = StringVar()
file_extension_message = Label(frame, text="Enter file extension (examples: .png, .txt, .doc):", fg="black", bg="SteelBlue1")
file_extension_message.grid(row=0, column=0,padx=3, pady=3)
file_extension_E = Entry(frame, textvariable=fe_string)
file_extension_E.grid(row=1, column=0, padx=5, pady=5)


# second text and entry box
cfp_string = StringVar()
check_folder_message = Label(frame, text="Enter the path, where you want to check for files(examples: C:\, C:\Program Files, D:\):", fg="black", bg="SteelBlue1")
check_folder_message.grid(row=50, column=0, padx=3, pady=3)
check_folder_path_E = Entry(frame, textvariable=cfp_string, width=80)
check_folder_path_E.grid(row=51, column=0, padx=5, pady=5)

# third text and entry box
nfp_string = StringVar()
new_folder_message = Label(frame, text="Enter the path of new folder, where you want to collect your files(example: C:\Users\emils.bisenieks\Desktop\MyFiles):", fg="black", bg="SteelBlue1")
new_folder_message.grid(row=100, column=0, padx=3, pady=3)
new_folder_path_E = Entry(frame, textvariable=nfp_string, width=80)
new_folder_path_E.grid(row=101, column=0, padx=5, pady=5)

# Button
selective_copy_push = Button(frame, text="Find and copy files", command=combine_functions(launch_start, complete_message), width=20, height=1)
selective_copy_push.grid(row=102, column=0, padx=20, pady=20)

window.mainloop()
