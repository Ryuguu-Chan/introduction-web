<?php

function creerTableDeMultiplication($n1, $n2) {
    echo "<table><tbody>";

    for ($y = 0; $y < $n1+1; $y++) {
        if ($y == 0) {
            echo "<th>x</th>";
        }
        else {
            echo "<tr><th>".$y."</th>";
        }
        
        for ($x = 0; $x < $n2+1; $x++) {
            if ($y == 0) {
                echo "<th>".$x."</th>";
            }
            else {
                echo "<td>".($y * $x)."</td>";
            }
        }
        echo "</tr>";
    }

    echo "</tbody></table>";
}

function creerTableDeAddition($n1, $n2) {
    echo "<table><tbody>";

    for ($y = 0; $y < $n1+1; $y++) {
        if ($y == 0) {
            echo "<th>+</th>";
        }
        else {
            echo "<tr><th>".$y."</th>";
        }
        
        for ($x = 0; $x < $n2+1; $x++) {
            if ($y == 0) {
                echo "<th>".$x."</th>";
            }
            else {
                echo "<td>".($y + $x)."</td>";
            }
        }
        echo "</tr>";
    }

    echo "</tbody></table>";
}

function creerTableDeDivision($n1, $n2) {
    echo "<table><tbody>";

    for ($y = 0; $y < $n1+1; $y++) {
        if ($y == 0) {
            echo "<th>÷</th>";
        }
        else {
            echo "<tr><th>".$y."</th>";
        }
        
        for ($x = 0; $x < $n2+1; $x++) {
            if ($y == 0) {
                echo "<th>".$x."</th>";
            }
            else {
                if ($x != 0) {
                    echo "<td>".round(($y / $x), 2)."</td>";
                }
                else {
                    echo "<td>pas possible</td>";
                }
            }
        }
        echo "</tr>";
    }
}

function creerTableDePuissance($n1, $n2) {
    echo "<table><tbody>";

    for ($y = 0; $y < $n1+1; $y++) {
        if ($y == 0) {
            echo "<th>^</th>";
        }
        else {
            echo "<tr><th>".$y."</th>";
        }
        
        for ($x = 0; $x < $n2+1; $x++) {
            if ($y == 0) {
                echo "<th>".$x."</th>";
            }
            else {
                echo "<td>".pow($y, $x)."</td>";
            }
        }
        echo "</tr>";
    }

    echo "</tbody></table>";
}