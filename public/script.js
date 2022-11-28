function initButton(query, title, onClick) {
    const root = document.querySelector(query)

    const spaces_p = document.createElement("p");
    spaces_p.innerHTML = `║&nbsp;&nbsp;&nbsp;${"&nbsp;".repeat(title.length)}&nbsp;&nbsp;&nbsp;║`

    const spaces2_p = document.createElement("p");
    spaces2_p.innerHTML = `║&nbsp;&nbsp;&nbsp;${"&nbsp;".repeat(title.length)}&nbsp;&nbsp;&nbsp;║`

    const title_p = document.createElement("p");
    title_p.innerHTML = `║&nbsp;&nbsp;&nbsp;${title}&nbsp;&nbsp;&nbsp;║`

    const edge_top = document.createElement("p");
    edge_top.innerHTML = `╔═══${"═".repeat(title.length)}═══╗`

    const edge_bottom = document.createElement("p");
    edge_bottom.innerHTML = `╚═══${"═".repeat(title.length)}═══╝`

    const elements = [
        edge_top,

        spaces_p,
        title_p,
        spaces2_p,

        edge_bottom
    ]

    elements.forEach(elm => {
        root.append(elm)
        root.append(document.createElement("br"))
    });

    root.onclick = onClick
}