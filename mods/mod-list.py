from os import listdir
import csv

path = "./mod-list.csv"

with open(path, 'w') as file:
    writer = csv.writer(file)
    files = listdir("./")
    fileCount = len(files)

    print("Generating mod list to path: \"%s\"." % file.name)
    print("%i mods found." % fileCount)

    for i in range(fileCount):
        progress = round(i/fileCount * 100)
        mod = files[i]

        if mod.endswith(".jar"):
            writer.writerow([mod])
            print("[%s%%]: Mod \"%s\" added to csv." % (f'{progress:03}', mod))

input("Finished generating mod-list csv! Enter any key to close...")