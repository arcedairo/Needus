<script>
    export let subMenu
    export let subDropdownOpen
 </script>

 <ul class="sub-menu">
   { #each subMenu.subMenuLinks as subMenulink, i (i)}
      <li>
         <a href="/">{subMenuLink}</a>
      </li>

   {/each}
 </ul>