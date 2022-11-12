import subprocess

'''
GET THE DATA
'''
src_data = str(input("SRC DATA: ")) #/home/kali/Desktop/PythonSync
dest_ip = str(input("DEST IP: ")) #192.168.1.11
dest_un = str(input("DEST UN: ")) #kali
dest_pw = str(input("DEST PW: ")) #Kali
dest_fldr = str(input("DEST FLDR: ")) #/home/kali/Desktop'

'''
FORK A NEW PROCESS TO DO THE SYNCING
'''
#1 arg is this script is thisscript
#2rd arg = src_data
#3th arg = dest_ip
#4th arg = dest_un
#5th arg = dest_pw 
#6th arg = dest_dir 
subprocess.run(['./rsync.sh', src_data, dest_ip,dest_un,dest_pw,dest_fldr], shell=False)




