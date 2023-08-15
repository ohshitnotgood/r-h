inc = input()
lit = []

while inc != '0':
    lit.append("const [show" + inc + ", setShow" + inc + "] = createSignal(false)")
    inc = input()


for each in lit:
    print(each)