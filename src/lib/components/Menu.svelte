<script>
   export let link
   export let dropdownOpen
</script>

<ul class="{dropdownOpen}">
    <li>
        <a href="/">{link.dropdown}</a>
    </li>

    {#each link.subMenus as subMenu (subMenu.id)}
        <SubDropdown {subMenu}/>
    {/each}

</ul>
