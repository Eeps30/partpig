<?php

if(is_file($tempFilePath)){
    gc_collect_cycles();
    unlink($tempFilePath);
}

?>