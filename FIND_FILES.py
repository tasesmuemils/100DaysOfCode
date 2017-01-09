#! python2
#find_file.py  - program will find every file with file format
#which user will input and then will copy all files to new folder

from Tkinter import *
import tkMessageBox, os, shutil

def launch_start():
    #Input folder path to check
    check_folder_path = cfp_string.get()
    selective_copy(check_folder_path)

# runs threw folder path, create new folder, finding files and copy them
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

#main window
window = Tk()
window.title("_Find your files_")
window.geometry("580x210")
frame = Frame(window)
frame.pack()

# first text and entry box
fe_string = StringVar()
file_extension_message = Label(frame, text="Enter file extension:", fg="black")
file_extension_message.grid(row=0, column=0,padx=20, pady=10)
file_extension_E = Entry(frame, textvariable=fe_string)
file_extension_E.grid(row=0, column=1, padx=20, pady=20)


# second text and entry box
cfp_string = StringVar()
check_folder_message = Label(frame, text="Enter the path,\nwhere you want to check for files:", fg="black")
check_folder_message.grid(row=50, column=0, padx=20, pady=20)
check_folder_path_E = Entry(frame, textvariable=cfp_string)
check_folder_path_E.grid(row=50, column=1, padx=20, pady=20)

# third text and entry box
nfp_string = StringVar()
new_folder_message = Label(frame, text="Enter the path of new folder, \nwhere you want to collect your files:", fg="black")
new_folder_message.grid(row=100, column=0, padx=20, pady=20)
new_folder_path_E = Entry(frame, textvariable=nfp_string)
new_folder_path_E.grid(row=100, column=1, padx=20, pady=20)

# button
selective_copy_push = Button(frame, text="Find and copy files", command=launch_start, width=20, height=1)
selective_copy_push.grid(row=100, column=2, padx=20, pady=20)

window.mainloop()
