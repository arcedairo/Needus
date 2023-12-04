<script>
   import SubMenu from './SubMenu.svelte'
   export let subMenu
   let subDropdownOpen = false
</script>

<li class="sub-dropdown">
    <div on:click="{() => subDropdownOpen =!subDropdownOpen}">
    <span>{subMenu.subDropdown}</span>
    </div>
   <SubMenu {subMenu} {subDropdownOpen}/>
</li>